"use server";

const MAX_LIMIT = 8;

export async function fetchPatient(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  console.log(data)

  return data;


}