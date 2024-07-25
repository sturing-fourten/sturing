export const cancleApply = async (studyId: string, userId: string) => {
  try {
    const response = await fetch(`/api/study/${studyId}/apply-cancel`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + userId,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "지원 취소하기 실패");
    }
  } catch (error: any) {
    console.error("Error fetching Image:", error.message);
    throw error;
  }
};
