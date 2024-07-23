import { RecentKeyword } from "@/types/localStorage";
import { useState, useEffect } from "react";

const useRecentKeywords = (userId: string | null) => {
  const [recentKeywords, setRecentKeywords] = useState<RecentKeyword[]>([]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text,
    };

    const filteredRecentKeywords = recentKeywords.filter((keyword) => keyword.text !== text);

    let updatedKeywords = [newKeyword, ...filteredRecentKeywords];

    if (updatedKeywords.length > 8) {
      updatedKeywords = updatedKeywords.slice(0, 8);
    }

    setRecentKeywords(updatedKeywords);
  };

  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = recentKeywords.filter((keyword) => keyword.id !== id);
    setRecentKeywords(nextKeyword);
    if (nextKeyword.length === 0) {
      localStorage.setItem(`recentKeywords_${userId || ""}`, JSON.stringify([]));
    }
  };

  const handleClearKeywords = () => {
    setRecentKeywords([]);
    localStorage.setItem(`recentKeywords_${userId || ""}`, JSON.stringify([]));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem(`recentKeywords_${userId || ""}`);
      if (result) {
        setRecentKeywords(JSON.parse(result));
      }
    }
  }, [userId]);

  useEffect(() => {
    if (recentKeywords.length) {
      localStorage.setItem(`recentKeywords_${userId || ""}`, JSON.stringify(recentKeywords));
    }
  }, [recentKeywords, userId]);

  return {
    recentKeywords,
    handleAddKeyword,
    handleRemoveKeyword,
    handleClearKeywords,
  };
};

export default useRecentKeywords;
