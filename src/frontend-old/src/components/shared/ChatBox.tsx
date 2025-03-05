'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'

type Message = {
  id: number;
  content: string;
  sender: 'user' | 'bot';
}

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hello! How can I help you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const toggleChat = () => setShowChat(!showChat)

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { id: prev.length + 1, content: input, sender: 'user' }])
      setInput('')
      // Here you would typically send the message to a backend and get a response
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, content: "Thanks for your message. How else can I assist you?", sender: 'bot' }])
      }, 1000)
    }
  }

  return (
    <>
      <Button 
        onClick={toggleChat} 
        className="fixed bottom-4 right-4 z-10"
      >
        {showChat ? 'Close Chat' : 'Open Chat'}
      </Button>

      {showChat && (
        <Card className="w-80 fixed bottom-16 right-4 z-20">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full pr-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div 
                    className={`rounded-lg p-2 max-w-[80%] ${
                      message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex w-full items-center space-x-2"
            >
              <Input 
                type="text" 
                placeholder="Type your message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
export default ChatBox
