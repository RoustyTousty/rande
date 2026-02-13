"use client";
import PageWrapper from "@/app/components/PageWrapper";

export default function Page() {
  const memories = [
    {
      title: "Mini tusiņš pie Ivara",
      text: `
To reiz, kad bez brīdinājuma izdomājām doties pakaļ Vlaģikam uz Rīgu un tad braukt pie Ivara
bija viena no jaurākajām atmiņām par tevi. Lai gan tas bija pārsvarā vienkārš tusiņš, tava klātbūtne to
padarīja desmit reižu foršāku.
      `,
    },
    {
      title: "Smārde",
      text: `
Noteikti viena no labākajām atmiņām bija arī pavadīt laiku ar tevīm Smmārdes festivālā.
Ar tevīm tas pārtapa no parasta tusiņa uz vienu no foršākajiem piedzīvojumiem.
Es pat nebūtu iedomājies labāku kompānīju. 
      `,
    },
    {
      title: "Pēc ziemas svētkiem",
      text: `
Atbraucot atpakaļ no Igaunījas es saslimu un tas kā tu parūpējies par mani bija kautkas īpašs.
Lai gan nēpārtraukti jutos slikti, tava klātbūtne bija tā vērta. Kā arī es vienmēr jutos kā mājās tev blakām.
      `,
    },
    {
      title: "Saldus saule",
      text: `
Pilnīgi neplānots notikums, kurš izrādījās viens no viss labākajiem piedzīvojumiem.
Pirmo reizi pavadīt vairākas dienas kopā un uzināt daudz vairāk vienam par otru.
Protams pati interesantākā daļa bija, tusēt saldus saulē līdz rītam un nedabūt miegu.
Kā arī pirmo reizi kārtīgi iepazinu tavus draugus.
      `,
    },
    {
      title: "Igaunīja",
      text: `
Brauciens uz Igauniju ar tevīm nekad nebija garlaicīgs.
Katrs brīdis bija piepildīts ar prieku un smiekliem.
Noteikti gribētos to atkārtot.
      `,
    },
  ];

  return (
    <PageWrapper backTo="/">
      <div className="absolute inset-0 overflow-y-auto px-4">
        <div className="max-w-4xl mx-auto pt-24 pb-24">
          <div className="bg-transparent p-8">
            <h1 className="text-5xl text-gray-800 font-bold mb-8 text-center">
              Atmiņas
            </h1>

            <div className="space-y-6">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-lg p-6"
                >
                  <h2 className="text-xl text-gray-800 font-semibold mb-3">
                    {memory.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {memory.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
