export function confirming(id: any) {
  return {
    subject: 'React Confirm Email',
    html: `
      <a href='/confirm/${id}'>
        click to confirm email
      </a>
    `,
    text: `Copy and paste this link: /confirm/${id}`,
  };
}
