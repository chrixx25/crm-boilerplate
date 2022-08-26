const parsePayload = (payload: string): Record<string, any> => {
  try {
    return JSON.parse(payload);
  } catch {
    return {};
  }
};
// or in lodash attempt(JSON.parse, payload)

export default parsePayload;
