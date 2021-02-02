'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Example lambda using Secrets Manager',
        input: event,
      },
      null,
      2
    ),
  };
};
