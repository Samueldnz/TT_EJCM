import z from "zod";

const user = z.object({
    cpf: z.string().trim().regex(/^\d{11}$/, {
        message: 'CPF deve conter exatamente 11 dígitos numéricos'
    }),
    telefone: z.string().trim().regex(/^\d{8,15}$/, {
        message: 'Telefone deve conter entre 8 e 15 dígitos numéricos'
    }),
    name: z
        .string()
        .trim()
        .min(5, "Nome deve ter no mínimo 5 caracteres")
        .max(40, "Nome deve ter no máximo 40 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
        { message: 'Senha deve conter no mínimo 6 caracteres, incluindo letras e números' }
    ),
    avatarUrl: z.url("URL inválida").optional()
});

const createUser = user;

const updateUser = user.partial();

const userParam = z.object({
    userId: z.uuid()
});

export default{
    createUser,
    updateUser,
    userParam
}