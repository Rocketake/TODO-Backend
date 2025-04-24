const parseType = (status) => {
  const isString = typeof status === 'string';
  if (!isString) return;
  const isKnownType = ['todo', 'in progress', 'done'].includes(status);
  if (isKnownType) return status;
};

export const parseFilterParams = (query) => {
  const { status } = query;

  const parsedStatus = parseType(status);

  return parsedStatus;
};
