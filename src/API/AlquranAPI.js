const API_URL = "//api.alquran.cloud/v1";
const Textedition = "quran-tajweed";

export async function getAllSurahs() {
    const res = await fetch(`${API_URL}/quran/${Textedition}`);
    const data = await res.json();
    console.log(data);
    const surahs = data?.data?.surahs;
    return surahs || {};
}

export async function getSurah(number) {
    const res = await fetch(`${API_URL}/surah/${number}/${Textedition}`);
    const data = await res.json();
    return { data } || {};
}
