const API_URL = "//api.alquran.cloud/v1";
const edition = "quran-tajweed";

export async function getAllSurahs() {
    const res = await fetch(`${API_URL}/quran/${edition}`);
    const data = await res.json();
    console.log(data);
    const surahs = data?.data?.surahs;
    return surahs || {};
}

export async function getSurah(number) {
    const res = await fetch(`${API_URL}/surah/${number}/${edition}`);
    const data = await res.json();
    // let surahText = "";
    // data?.data?.ayahs.map((aya) => (surahText += aya.text));
    return { data } || {};
}
