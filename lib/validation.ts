import { z } from 'zod';

// Example Zod schema for form validation
const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  age: z.number().int().min(0, 'Age must be a positive number'),
});

// Export the schema for use in other parts of the application
export default userSchema;