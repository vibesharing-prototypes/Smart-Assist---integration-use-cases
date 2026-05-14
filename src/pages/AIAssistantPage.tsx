import { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  CircularProgress,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  documentsUsed?: number;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [includeContext, setIncludeContext] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Shared secret matched against API_SHARED_SECRET on the server.
          'x-api-secret': import.meta.env.VITE_API_SECRET ?? '',
        },
        body: JSON.stringify({
          message: input,
          includeContext,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        documentsUsed: data.documentsUsed,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please make sure the server is running and AWS credentials are configured.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3, background: "radial-gradient(125.08% 101.36% at 0% 0%, var(--lens-semantic-color-background-base-gradient-start, #f9f9fc) 30.53%, var(--lens-semantic-color-background-base-gradient-end, #fcfcff) 100%)" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          AI Assistant
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Powered by Claude 3.5 Sonnet via AWS Bedrock
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={includeContext}
              onChange={(e) => setIncludeContext(e.target.checked)}
            />
          }
          label="Search documents for context"
        />
      </Box>

      <Paper
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 2,
          mb: 2,
          bgcolor: 'background.default',
        }}
      >
        {messages.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'text.secondary',
            }}
          >
            <Typography>Start a conversation with the AI assistant</Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((message, index) => (
              <Card
                key={index}
                sx={{
                  alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '70%',
                  bgcolor:
                    message.role === 'user'
                      ? 'primary.main'
                      : 'background.paper',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {message.role === 'user' ? (
                      <PersonIcon fontSize="small" />
                    ) : (
                      <SmartToyIcon fontSize="small" />
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 'bold',
                        color:
                          message.role === 'user'
                            ? 'primary.contrastText'
                            : 'text.primary',
                      }}
                    >
                      {message.role === 'user' ? 'You' : 'AI Assistant'}
                    </Typography>
                    {message.documentsUsed !== undefined && message.documentsUsed > 0 && (
                      <Chip
                        label={`${message.documentsUsed} docs`}
                        size="small"
                        sx={{ height: 20 }}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color:
                        message.role === 'user'
                          ? 'primary.contrastText'
                          : 'text.primary',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {message.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
            {loading && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={20} />
                <Typography variant="body1" color="text.secondary">
                  Thinking...
                </Typography>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>
        )}
      </Paper>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <Button
          variant="contained"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
