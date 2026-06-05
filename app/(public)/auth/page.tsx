'use client';

import { Card, CardContent } from '@/src/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';

import { LoginForm } from './(components)/LoginForm';

const TABS_ITEMS = {
  LOGIN: 'login',
  SIGNUP: 'signup'
};

const SignupForm = () => null;

const AuthPage = () => (
  <Card className='w-full max-w-sm'>
    <CardContent>
      <Tabs className='w-full' defaultValue={TABS_ITEMS.LOGIN}>
        <TabsList className='w-full'>
          <TabsTrigger value={TABS_ITEMS.LOGIN}>Войти</TabsTrigger>
          <TabsTrigger value={TABS_ITEMS.SIGNUP}>Зарегистрироваться</TabsTrigger>
        </TabsList>
        <TabsContent value={TABS_ITEMS.LOGIN}>
          <LoginForm />
        </TabsContent>
        <TabsContent value={TABS_ITEMS.SIGNUP}>
          <SignupForm />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
);

export default AuthPage;
