import { useState } from "react";

import { editText } from "../services/openai";

export function useAIEdit() {

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const runAIEdit = async (
    text: string,
    prompt: string
  ) => {

    setLoading(true);

    const response =
      await editText(
        text,
        prompt
      );

    setResult(response);

    setLoading(false);
  };

  return {
    result,
    loading,
    runAIEdit,
  };
}