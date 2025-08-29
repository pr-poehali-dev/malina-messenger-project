import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, name: 'Анна Смирнова', lastMessage: 'Привет! Как дела?', time: '14:32', avatar: '👩', unread: 2, online: true },
    { id: 2, name: 'Дмитрий Петров', lastMessage: 'Увидимся завтра', time: '13:15', avatar: '👨', unread: 0, online: false },
    { id: 3, name: 'Мария Иванова', lastMessage: 'Отправила файл', time: '12:48', avatar: '👩‍💼', unread: 1, online: true },
    { id: 4, name: 'Александр Козлов', lastMessage: 'Спасибо за помощь!', time: '11:20', avatar: '👨‍💻', unread: 0, online: false },
  ];

  const calls = [
    { id: 1, name: 'Анна Смирнова', type: 'video', time: '14:25', duration: '05:32', missed: false },
    { id: 2, name: 'Дмитрий Петров', type: 'audio', time: '13:10', duration: '02:15', missed: true },
    { id: 3, name: 'Мария Иванова', type: 'video', time: '12:30', duration: '12:45', missed: false },
  ];

  const circles = [
    { id: 1, name: 'Разработчики React', members: 1243, avatar: '⚛️', newMessages: 5 },
    { id: 2, name: 'Путешествия', members: 856, avatar: '🌍', newMessages: 12 },
    { id: 3, name: 'Кулинария', members: 2156, avatar: '👨‍🍳', newMessages: 3 },
    { id: 4, name: 'Фотография', members: 734, avatar: '📷', newMessages: 0 },
  ];

  const messages = [
    { id: 1, text: 'Привет! Как твои дела?', time: '14:30', sender: 'other' },
    { id: 2, text: 'Привет! Всё отлично, работаю над новым проектом', time: '14:31', sender: 'me' },
    { id: 3, text: 'Звучит интересно! Расскажешь подробнее?', time: '14:32', sender: 'other' },
  ];

  const renderChats = () => (
    <div className="space-y-3">
      {chats.map((chat) => (
        <Card 
          key={chat.id} 
          className={`cursor-pointer transition-all hover:bg-raspberry-50 ${selectedChat === chat.id ? 'bg-raspberry-100 border-raspberry-300' : ''}`}
          onClick={() => setSelectedChat(chat.id)}
        >
          <CardContent className="flex items-center space-x-4 p-4">
            <div className="relative">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="text-xl">{chat.avatar}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <Badge className="bg-raspberry-500 hover:bg-raspberry-600 text-white">
                {chat.unread}
              </Badge>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCalls = () => (
    <div className="space-y-3">
      {calls.map((call) => (
        <Card key={call.id} className="cursor-pointer hover:bg-raspberry-50">
          <CardContent className="flex items-center space-x-4 p-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${call.missed ? 'bg-red-100' : 'bg-green-100'}`}>
              <Icon 
                name={call.type === 'video' ? 'Video' : 'Phone'} 
                className={`w-5 h-5 ${call.missed ? 'text-red-600' : 'text-green-600'}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-900 truncate">{call.name}</h3>
                <span className="text-sm text-gray-500">{call.time}</span>
              </div>
              <p className="text-sm text-gray-600">
                {call.missed ? 'Пропущенный звонок' : `Длительность: ${call.duration}`}
              </p>
            </div>
            <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
              <Icon name="Phone" className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCircles = () => (
    <div className="space-y-3">
      {circles.map((circle) => (
        <Card key={circle.id} className="cursor-pointer hover:bg-raspberry-50">
          <CardContent className="flex items-center space-x-4 p-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl">{circle.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-900 truncate">{circle.name}</h3>
                {circle.newMessages > 0 && (
                  <Badge className="bg-raspberry-500 hover:bg-raspberry-600 text-white">
                    {circle.newMessages}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600">{circle.members} участников</p>
            </div>
            <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
              <Icon name="MessageCircle" className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderChatWindow = () => {
    if (!selectedChat) {
      return (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center text-gray-500">
            <Icon name="MessageCircle" className="w-16 h-16 mx-auto mb-4 text-raspberry-300" />
            <p className="text-lg">Выберите чат для начала переписки</p>
          </div>
        </div>
      );
    }

    const currentChat = chats.find(chat => chat.id === selectedChat);
    
    return (
      <div className="flex-1 flex flex-col">
        <Card className="border-b rounded-none border-x-0 border-t-0">
          <CardHeader className="flex flex-row items-center space-y-0 space-x-4 p-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="text-xl">{currentChat?.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">{currentChat?.name}</h3>
              <p className="text-sm text-green-600">в сети</p>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
                <Icon name="Phone" className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
                <Icon name="Video" className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
        </Card>
        
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'me' 
                  ? 'bg-raspberry-500 text-white' 
                  : 'bg-white text-gray-900 shadow-sm'
              }`}>
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'me' 
                    ? 'text-raspberry-100' 
                    : 'text-gray-500'
                }`}>{message.time}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Card className="border-t rounded-none border-x-0 border-b-0">
          <CardContent className="flex items-center space-x-2 p-4">
            <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
              <Icon name="Paperclip" className="w-5 h-5" />
            </Button>
            <Input 
              placeholder="Введите сообщение..." 
              className="flex-1"
            />
            <Button size="sm" className="bg-raspberry-500 hover:bg-raspberry-600 text-white">
              <Icon name="Send" className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Card className="border-b rounded-none border-x-0 border-t-0">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-raspberry-500 to-raspberry-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍇</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Малина</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
              <Icon name="Search" className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-raspberry-600 hover:bg-raspberry-100">
              <Icon name="Settings" className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 border-r bg-white">
          {/* Navigation Tabs */}
          <div className="flex border-b">
            <Button
              variant={activeTab === 'chats' ? 'default' : 'ghost'}
              className={`flex-1 rounded-none ${
                activeTab === 'chats' 
                  ? 'bg-raspberry-500 hover:bg-raspberry-600 text-white' 
                  : 'text-gray-600 hover:bg-raspberry-50'
              }`}
              onClick={() => setActiveTab('chats')}
            >
              <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
              Чаты
            </Button>
            <Button
              variant={activeTab === 'calls' ? 'default' : 'ghost'}
              className={`flex-1 rounded-none ${
                activeTab === 'calls' 
                  ? 'bg-raspberry-500 hover:bg-raspberry-600 text-white' 
                  : 'text-gray-600 hover:bg-raspberry-50'
              }`}
              onClick={() => setActiveTab('calls')}
            >
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Звонки
            </Button>
            <Button
              variant={activeTab === 'circles' ? 'default' : 'ghost'}
              className={`flex-1 rounded-none ${
                activeTab === 'circles' 
                  ? 'bg-raspberry-500 hover:bg-raspberry-600 text-white' 
                  : 'text-gray-600 hover:bg-raspberry-50'
              }`}
              onClick={() => setActiveTab('circles')}
            >
              <Icon name="Users" className="w-4 h-4 mr-2" />
              Кружки
            </Button>
          </div>

          {/* Content */}
          <div className="p-4 h-full overflow-y-auto">
            {activeTab === 'chats' && renderChats()}
            {activeTab === 'calls' && renderCalls()}
            {activeTab === 'circles' && renderCircles()}
          </div>
        </div>

        {/* Main Chat Area */}
        {renderChatWindow()}
      </div>
    </div>
  );
};

export default Index;