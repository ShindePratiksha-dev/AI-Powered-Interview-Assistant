export async function parseResume(file) {
  const text = await file.text();
  const name = text.match(/Name:\s*(.*)/)?.[1] || '';
  const email = text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)?.[0] || '';
  const phone = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/)?.[0] || '';
  return { name, email, phone };
}
