# AI Assistant Setup Guide

This guide will help you set up the AI Assistant feature powered by AWS Bedrock (Claude 3.5 Sonnet).

## Prerequisites

1. AWS Account with Bedrock access
2. AWS credentials — an SSO profile is strongly preferred over long-lived IAM keys
3. Bedrock model access enabled for Claude 3.5 Sonnet in your region

## Setup Steps

### 1. Enable AWS Bedrock Access

1. Log into your AWS Console
2. Navigate to AWS Bedrock service
3. Request model access for `Claude 3.5 Sonnet v2`
4. Wait for approval (usually instant for most regions)

### 2. Get AWS credentials (prefer SSO)

**Preferred — AWS SSO (short-lived credentials):**
1. Configure an SSO profile with `aws configure sso`
2. Use that profile name as `AWS_PROFILE` in `server/.env`
3. The server picks it up via the AWS default credential chain — nothing to paste

**Only if SSO is not available — IAM access keys (discouraged):**
1. Go to IAM Console → Users, create or use a user
2. Attach a **least-privilege** policy — `bedrock:InvokeModel` on the specific
   model ARN only. Do **not** attach `AmazonBedrockFullAccess`.
3. Create access keys and store them in a secrets manager, not in chat/email
4. Rotate them on a schedule

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example server/.env
   ```

2. Edit `server/.env`. With SSO (preferred):
   ```
   AWS_REGION=us-west-2
   AWS_PROFILE=your_sso_profile_here
   ```

3. Generate the API shared secret and set it in **both** files:
   ```bash
   node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
   ```
   - `server/.env`  → `API_SHARED_SECRET=<value>`
   - root `.env`    → `VITE_API_SECRET=<same value>`

   `/api/*` fails closed (HTTP 503) until `API_SHARED_SECRET` is set, and rejects
   any request missing the matching `x-api-secret` header.

### 4. Install Server Dependencies

```bash
cd server
npm install
cd ..
```

### 5. Run the Application

Open two terminal windows:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server:dev
```

The frontend will run on `http://localhost:5173` (or similar)
The backend API will run on `http://localhost:3001`

### 6. Access the AI Assistant

1. Open the app in your browser
2. Click on "AI Assistant" in the navigation
3. Start chatting!

## Features

- **Real-time chat** with Claude 3.5 Sonnet
- **Document search** - Toggle to search through your document database for relevant context
- **Simple document storage** - Documents are stored in `server/documents.json`

## Customizing Documents

Edit `server/documents.json` to add your own documents:

```json
[
  {
    "id": "1",
    "title": "Your Document Title",
    "content": "Your document content here..."
  }
]
```

## Troubleshooting

**Error: "Failed to get response from AI"**
- Check that your AWS credentials are correct
- Verify Bedrock model access is enabled
- Check that the server is running on port 3001
- Verify your AWS region has Claude 3.5 Sonnet available

**CORS errors:**
- Make sure both frontend and backend are running
- Check that the backend is on port 3001

**Rate limiting:**
- AWS Bedrock has rate limits per region
- Consider implementing request queuing if needed

## Security Notes

⚠️ **IMPORTANT**:
- Never commit `server/.env` or the root `.env` to git (both are gitignored)
- This server is a **localhost-only dev tool**. It binds to `127.0.0.1` and proxies
  a Diligent AWS Bedrock account. Do not expose it on a public interface or `0.0.0.0`.
- `/api/*` is gated by `API_SHARED_SECRET` and a CORS allowlist — keep both set
- Prefer AWS SSO / IAM roles over long-lived access keys
- Scope IAM to `bedrock:InvokeModel` on the specific model only — never `*FullAccess`
- For any real deployment, replace the shared secret with proper auth (Cognito,
  IAM Identity Center) and a scoped IAM role
