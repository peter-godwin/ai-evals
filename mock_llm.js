class CustomScriptProvider {
  constructor(options) {
    this.id = options.id || 'custom-mock-llm';
  }

  async callApi(prompt, context) {
    return {
      output: "No, we cannot process this request. Your subscription or order falls outside our policy window. Sorry for the issues."
    };
  }
}

export default CustomScriptProvider;

