"use client";
import PageWrapper from "@/app/components/PageWrapper";

export default function Page() {
  const message = `
Ja tev šodien ir grūti, lūdzu, atceries vienu lietu —
tev nav jātiek ar visu galā vienai.

Ir pilnīgi normāli justies nogurušai, apmulsušai vai skumjai.
Tas nenozīmē, ka tu esi vāja.
Tas nozīmē, ka tu esi cilvēks.

Pat tajās dienās, kad šķiet, ka nekas nesanāk
un kad pati sev liecies par maz,
tu joprojām esi pietiekama.
Tu vienmēr esi bijusi.

Man ļoti rūp, kā tu jūties.
Ne tikai tavos labajos brīžos,
bet arī tajos, kad klusē
un nesaki, ka tev sāp.

Ja es varētu, es apsēstos tev blakus.
Bez steigas. Bez jautājumiem.
Vienkārši, lai tu neesi viena.

Elpo lēni.
Dod sev laiku.
Viss nav jāatrisina šodien.

Un, lūdzu, nekad neaizmirsti —
es esmu tavā pusē.
Vienmēr.
  `;

  return (
    <PageWrapper backTo="/">
      <div className="absolute inset-0 overflow-y-auto px-4">
        <div className="max-w-3xl mx-auto pt-24 pb-24">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Ja tev ir slikta diena
            </h1>

            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
              {message}
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
