# Boilerplate Médico Institucional

Site institucional em Next.js, TypeScript, Tailwind CSS e Bun, preparado para ser
duplicado e personalizado para profissionais médicos.

## Como rodar

Instale as dependências:

```bash
bun install
```

Execute o ambiente local:

```bash
bun run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:3000`.

## Qualidade e build

Formatar arquivos:

```bash
bun run format
```

Rodar lint e verificação do Biome:

```bash
bun run lint
```

Gerar build de produção:

```bash
bun run build
```

## Onde trocar os dados

Todas as informações editáveis ficam em:

```text
data/doctor-profile.ts
```

Esse arquivo concentra nome profissional, CRM, posicionamento, biografia, foto,
cores, endereço, mapa, disponibilidade, contatos, serviços, diferenciais,
depoimentos, FAQ e flags de exibição das seções.

Campos ainda não confirmados devem ficar vazios. As seções dependentes desses
campos ficam ocultas automaticamente.

## Como duplicar

1. Duplique este diretório.
2. Troque os dados em `data/doctor-profile.ts`.
3. Substitua as imagens em `public/images`.
4. Atualize as flags de seção conforme o conteúdo disponível.
5. Rode `bun run format`, `bun run lint` e `bun run build`.

## Checklist antes de publicar

- Autorização de uso da foto profissional.
- CRM, RQE e especialidades confirmados formalmente.
- Telefone e WhatsApp comercial confirmados.
- E-mail confirmado.
- Instagram oficial confirmado.
- Endereço público confirmado.
- Horários de atendimento confirmados.
- Serviços revisados e aprovados.
- Link de agendamento confirmado, se houver.
- Depoimentos autorizados por escrito, se forem publicados.
