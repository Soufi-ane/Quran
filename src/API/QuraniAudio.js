// const API_URL = "//api.quran.com/api/v4";
// export async function getSurahAudio(reciter, number) {
//     const res = await fetch(`${API_URL}/${number}/${reciter}`);
//     const data = await res.json();
//     return res || data || {};
// }

// export async function getReciters() {
//     const res = await fetch(`${URL}/chapters/.mp3`);
//     const data = await res.json();
//     return data || res || {};
// }
// const URL = "//download.quranicaudio.com/quran";

// export async function getSurahAudio(reciter, number) {
//     const res = await fetch(`${URL}/${reciter}/${formatNumber(number)}`);
//     return res || {};
// }

/*
abdullaah_3awwaad_al-juhaynee
abdullaah_basfar
abdurrahmaan_as-sudays
huthayfi
abdul_muhsin_alqasim
thubaity
ahmed_ibn_3ali_al-3ajamy
abdulazeez_al-ahmad
abdul_basit_murattal
abdulwadood_haneef
aziz_alili
abdulbaset_mujawwad
abdulrazaq_bin_abtan_al_dulaimi
khayat
adel_kalbani
abdulkareem_al_hazmi
abdulmun3im_abdulmubdi2
abdurrashid_sufi
ahmad_alhuthayfi
abdullah_matroud
abdul_wadood_haneef_rare
ahmad_nauina
akram_al_alaqmi
ali_hajjaj_alsouasi
asim_abdulaleem
abdallah_abdal
ali_jaber
bandar_baleela/complete
dr.shawqy_7amed/murattal
fares
fatih_seferagic
rifai
hamad_sinan
hatem_farid/collection
jibreen
imad_zuhair_hafez
ibrahim_al_akhdar
idrees_akbar
khaalid_al-qahtaanee
khalid_alghamdi
khalifah_taniji
mishaari_raashid_al_3afaasee
muhammad_siddeeq_al-minshaawee
muhammad_jibreel/complete
mehysni
minshawi_mujawwad
muhammad_alhaidan
muhammad_abdulkareem
mustafa_al3azzawi
mu7ammad_7assan
mostafa_ismaeel
muhammad_patel
mohammad_altablawi
mohammad_ismaeel_almuqaddim
muhammad_khaleel
mahmood_khaleel_al-husaree_iza3a
mahmood_ali_albana
maher_almu3aiqly/year1440
nabil_rifa3inasser_bin_ali_alqatami
sa3ood_al-shuraym
sa3d_al-ghaamidi/complete
sahl_yaaseen
salaah_bukhaatir
sodais_and_shuraim
saleh_al_taleb
salahbudair
sadaqat_ali
salah_alhashim
tawfeeq_bin_saeed-as-sawaaigh
wadee_hammadi_al-yamani
yasser_ad-dussary

const recitersData = [
  { id: 'abdullaah_3awwaad_al-juhaynee', name: 'عبد الله الجحيني' },
  { id: 'abdullaah_basfar', name: 'عبد الله بن علي بصفر' },
  { id: 'abdurrahmaan_as-sudays', name: 'عبد الرحمن السديس' },
  { id: 'huthayfi', name: 'عبد الحميد الحفيظ' },
  { id: 'abdul_muhsin_alqasim', name: 'عبد المحسن القاسم' },
  { id: 'thubaity', name: 'سعد ال ثبيتي' },
  { id: 'ahmed_ibn_3ali_al-3ajamy', name: 'أحمد بن علي العجمي' },
  { id: 'abdulazeez_al-ahmad', name: 'عبد العزيز الأحمد' },
  { id: 'abdul_basit_murattal', name: 'عبد الباسط عبد الصمد (مرتل)' },
  { id: 'abdulwadood_haneef', name: 'عبد الودود حنيف' },
  { id: 'aziz_alili', name: 'عزيز العلي' },
  { id: 'abdulbaset_mujawwad', name: 'عبد الباسط عبد الصمد (مجود)' },
  { id: 'abdulrazaq_bin_abtan_al_dulaimi', name: 'عبد الرزاق بن أبطان الدليمي' },
  { id: 'khayat', name: 'حسن خياط' },
  { id: 'adel_kalbani', name: 'عادل الكلباني' },
  { id: 'abdulkareem_al_hazmi', name: 'عبد الكريم الحزمي' },
  { id: 'abdulmun3im_abdulmubdi2', name: 'عبد المنعم عبد المبدي' },
  { id: 'abdurrashid_sufi', name: 'عبد الرشيد صوفي' },
  { id: 'ahmad_alhuthayfi', name: 'أحمد الحذيفي' },
  { id: 'abdullah_matroud', name: 'عبد الله مطرود' },
  { id: 'abdul_wadood_haneef_rare', name: 'عبد الودود حنيف (نادر)' },
  { id: 'ahmad_nauina', name: 'أحمد نوينع' },
  { id: 'akram_al_alaqmi', name: 'أكرم العلاقمي' },
  { id: 'ali_hajjaj_alsouasi', name: 'علي حجاج السويسي' },
  { id: 'asim_abdulaleem', name: 'عاصم عبد الله' },
  { id: 'abdallah_abdal', name: 'عبد الله عبد الله' },
  { id: 'ali_jaber', name: 'علي جابر' },
  { id: 'bandar_baleela/complete', name: 'بندر بليلة' },
  { id: 'dr.shawqy_7amed/murattal', name: 'شوقي حامد (مرتل)' },
  { id: 'fares', name: 'فارس عباد' },
  { id: 'fatih_seferagic', name: 'فاتح سفيراغيتش' },
  { id: 'rifai', name: 'ريفاعي' },
  { id: 'hamad_sinan', name: 'حمد سنان' },
  { id: 'hatem_farid/collection', name: 'حاتم فريد' },
  { id: 'jibreen', name: 'محمد الجبرين' },
  { id: 'imad_zuhair_hafez', name: 'عماد زهير حافظ' },
  { id: 'ibrahim_al_akhdar', name: 'إبراهيم الأخضر' },
  { id: 'idrees_akbar', name: 'إدريس أكبر' },
  { id: 'khaalid_al-qahtaanee', name: 'خالد القحطاني' },
  { id: 'khalid_alghamdi', name: 'خالد الغامدي' },
  { id: 'khalifah_taniji', name: 'خليفة تانيجي' },
  { id: 'mishaari_raashid_al_3afaasee', name: 'مشاري راشد العفاسي' },
  { id: 'muhammad_siddeeq_al-minshaawee', name: 'محمد صديق المنشاوي' },
  { id: 'muhammad_jibreel/complete', name: 'محمد جبريل' },
  { id: 'mehysni', name: 'محمد الأحمدي المحيسني' },
  { id: 'minshawi_mujawwad', name: 'محمد صديق المنشاوي (مجود)' },
  { id: 'muhammad_alhaidan', name: 'محمد الهيدان' },
  { id: 'muhammad_abdulkareem', name: 'محمد عبد الكريم' },
  { id: 'mustafa_al3azzawi', name: 'مصطفى العزاوي' },
  { id: 'mu7ammad_7assan', name: 'محمد حسان' },
  { id: 'mostafa_ismaeel', name: 'مصطفى إسماعيل' },
  { id: 'muhammad_patel', name: 'محمد إقبال بن پٹیل' },
  { id: 'mohammad_altablawi', name: 'محمد الطبلاوي' },
  { id: 'mohammad_ismaeel_almuqaddim', name: 'محمد إسماعيل المقدم' },
  { id: 'muhammad_khaleel', name: 'محمد خليل' },
  { id: 'mahmood_khaleel_al-husaree_iza3a', name: 'محمود خليل الحصري (عزاء)' },
  { id: 'mahmood_ali_albana', name: 'محمود علي البنا' },
  { id: 'maher_almu3aiqly/year1440', name: 'ماهر المعيقلي (عام 1440)' },
  { id: 'nabil_rifa3inasser_bin_ali_alqatami', name: 'نبيل الرفاعي ناصر بن علي القطامي' },
  { id: 'sa3ood_al-shuraym', name: 'سعود الشريم' },
  { id: 'sa3d_al-ghaamidi/complete', name: 'سعد الغامدي' },
  { id: 'sahl_yaaseen', name: 'سهل ياسين' },
  { id: 'salaah_bukhaatir', name: 'صلاح بو خاطر' },
  { id: 'sodais_and_shuraim', name: 'سديس والشريم' },
  { id: 'saleh_al_taleb', name: 'صالح آل طالب' },
  { id: 'salahbudair', name: 'صلاح بدير' },
  { id: 'sadaqat_ali', name: 'صداقت علي' },
  { id: 'salah_alhashim', name: 'صلاح الهاشم' },
  { id: 'tawfeeq_bin_saeed-as-sawaaigh', name: 'توفيق بن سعيد السوائق' },
  { id: 'wadee_hammadi_al-yamani', name: 'وديع حمادي اليماني' },
  { id: 'yasser_ad-dussary', name: 'ياسر الدوسري' }
];



*/
