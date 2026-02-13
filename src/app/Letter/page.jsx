"use client";
import PageWrapper from "@/app/components/PageWrapper";

export default function Page() {
  const letter = `
Satikt tevi bija kā klausīties dziesmu pirmo reizi un zinot, ka tā būs mana mīļākā.

Jā, tu esi skaista, to var pamanīt ikviens. Tu ienāc telpā un visa atmosfēra mainās. Bet tavs skaistums nav tas, kas tevī mani piesaista visvairāk. Tas ir redzams bez pūlēm un neprasa iedziļināties.

Bet lieta tāda, skaistums ir viss vieglākais ko pamanīt. Tais aizņem nulle centību, lai parādītu ar pirkstu. Tas, ko redzu tevī, aizņem uzmanību. Tas nozīmē pazīt tevi, un tā ir tā daļa, kas padara tevi neaizmirstamu.

Es pamanu tavus smieklus. Ne tikai tos pieklājīgos, kad meiģini būt klusa, bet tos īstos. Tos kuri pārņem tevi. Tos kurus meiģini noslēpt, jo domā, ka būs par skaļu. Bet tie smiekli, tie ir tādi, kas liek cilvēkiem smieties vien dzirdot tos. Tie piepilda istabu kā to nespēj nekas cits.

Es pamanu to kā tavs skatiens mainās, kad runā par to, kas tev patiešām interesē. Ne tikai to liesmu acīs, bet arī koncentrēšanos, aizrautību un to kā paceļās tava balss. Tas ir kā vērot liesmu, kas uzlesmoja pati no sevis, pat ja pati mēģini to apslēpt. Varbūt tu to nepamani, bet tā aizrautība, ir viena no tavā skaistākajām īpašībām.

Un tad ir momenti, kurus neviens cits neredz. Tas kā paliec klusa, kad kautkas sāp. Tas kā meiģini saturēt sevi kopā, jo negribi uzgrūst citiem savas domas. Tā itkā tev vienmēr jābūt stiprai, taču joprojām kautkā, pat savos klusajos brīžos, tu parādies cilvēkos ar atvertu sirdi. Tādau skaistumu nevar uzkrāsot, nevar nofakot un nevar atkārtot.

Bet tas kā tu rūpējies, atstāj atmiņas cilvēkos, kuri ir pietiekami laimīgi tevi pazīt. Tavs skaistums varbūt pagriezīs acis, bet tava sirds liks palikt. Tas kā tu mīli, tas kā tu dod un tas kā tu sapņo. Tas liek cilvēkiem palikt. Tas tevi padara neaizmirstamu. 

Cilvēki doma, ka tevi pazīst tikai redzot tavu seju. Bet, ja viņi pievērstu uzmanību, kaut nedaudz uzmanību, viņi pamanītu, ka tavs izskats ir tikai virspuse, ne visums. Tu esi skaista, jā, bet tā ir viss neinteresantākā lieta par tevim. Tavs īstais skaistums ir vietās, ko citi nekad nepamana. Un tā ir daļa no tevīm, ko nekad nebeidzu mīlēt. 

Kā klausīties dziesmu pirmo reizi un zinot, ka tā būs mana mīļākā.
  
Emīls. (Ne Valodnieks)`;

  return (
    <PageWrapper backTo="/">
      <div className="absolute inset-0 overflow-y-auto px-4">
        <div className="max-w-3xl mx-auto pt-24 pb-24">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Vēstule/Dzejolis tev
            </h1>

            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
              {letter}
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
