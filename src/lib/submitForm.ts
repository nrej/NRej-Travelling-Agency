// Sends a submission to Netlify Forms. Every form submitted here must also be
// declared in public/__forms.html so Netlify registers it at build time.
export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string | number>,
): Promise<void> {
  const body = new URLSearchParams({ 'form-name': formName });
  for (const [key, value] of Object.entries(fields)) {
    body.append(key, String(value));
  }

  const response = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
}
