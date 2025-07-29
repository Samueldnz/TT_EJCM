import { z } from 'zod';

export const userSchema = z.object({
  cpf: z.string().regex(/^\d{11}$/, {
    message: 'CPF deve conter exatamente 11 dígitos numéricos'
  }),

  telefone: z.string().regex(/^\d{8,15}$/, {
    message: 'Telefone deve conter entre 8 e 15 dígitos numéricos'
  }),

  name: z.string().regex(/^[A-Za-zÀ-ÿ\s]{2,}$/, {
    message: 'Nome deve conter pelo menos 2 letras e apenas caracteres alfabéticos'
  }),

  email: z.string().regex(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    { message: 'E-mail inválido' }
  ),

  password: z.string().regex(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
    { message: 'Senha deve conter no mínimo 6 caracteres, incluindo letras e números' }
  ),

  avatarUrl: z.string().regex(
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
    { message: 'URL inválida' }
  ).optional()
});
