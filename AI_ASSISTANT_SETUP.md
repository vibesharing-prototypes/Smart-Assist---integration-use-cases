# AI Assistant Setup Guide

This guide will help you set up the AI Assistant feature powered by AWS Bedrock (Claude 3.5 Sonnet).

## Prerequisites

1. AWS Account with Bedrock access
2. AWS IAM credentials (Access Key ID and Secret Access Key)
3. Bedrock model access enabled for Claude 3.5 Sonnet in your region

## Setup Steps

### 1. Enable AWS Bedrock Access

1. Log into your AWS Console
2. Navigate to AWS Bedrock service
3. Request model access for `Claude 3.5 Sonnet v2`
4. Wait for approval (usually instant for most regions)

### 2. Create AWS IAM Credentials

1. Go to IAM Console → Users
2. Create a new user or use existing one
3. Attach policy: `AmazonBedrockFullAccess` (or create custom policy with bedrock:InvokeModel permission)
4. Create access keys (Access Key ID + Secret Access Key)
5. Save these credentials securely

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example server/.env
   ```

2. Edit `server/.env` and add your credentials:
   ```
   AWS_ACCESS_KEY_ID=your_access_key_here
   AWS_SECRET_ACCESS_KEY=your_secret_key_here
   AWS_REGION=us-east-1
   ```

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
- Never commit the `server/.env` file to git
- These credentials are for testing only
- For production, use AWS IAM roles, not access keys
- Consider using AWS Cognito or IAM Identity Center for authentication
