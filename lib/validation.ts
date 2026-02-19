import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Task title is required').max(255),
  taskDate: z.string().date('Invalid date format'),
});

export const aiPromptSchema = z.object({
  prompt: z.string().min(1, 'Prompt is required').max(1000),
  mode: z.enum(['titles', 'captions', 'weekly-plan', 'motivation']),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type AIPromptInput = z.infer<typeof aiPromptSchema>;