//create custome hook for json parse
export const userJsonParse = (json) => {
    return Object.entries(json).map(([key, value]) => ({
        ...value,
        id: key
    }));
  };