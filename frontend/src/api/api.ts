export async function getData(newRows: string[][]) {
  try {
    const response = await fetch(`http://localhost:4000/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        boardData: newRows,
      }),
    });
    const responseData = await response.json();
    console.log("responseData: ", responseData);
    return responseData;
  } catch (err) {
    return [];
  }
}
