"use client";
import PageWrapper from "@/app/components/PageWrapper";

export default function Page() {
  const goals = [
    {
      title: ":)",
      text: `
I want a white house with blue shutters and a room overlooking the river so I can paint.
Anything else?
Yes! I want a big ol’ porch wrapped around the entire house. We can drink tea and watch the Sun go down.
Okay.
You promise?
Mhmm, I promise.
Good.
      `,
    },
    {
      title: "Kopā ceļot",
      text: `
Es gribu kopā apceļot pasauli ar tevi. Redzēt jaunas vietas, iepazīt dažādas kūltūras un radīt atmiņas.
Es vēlos kopā apceļot Ameriku braucot garā pārbraucienā, es vēlos kopā doties uz Japānu/Koreju/Ķīnu un izbaudīt kūltūru,
es vēlos kopā doties uz Brazīlīju/Austrālīju un izbaudīt siltās zemes, es vēlos kopā doties uz vietām, kur neesam bijuši.
      `,
    },
    {
      title: "Pavadīt laiku",
      text: `
Lai gan ikdiena varētu šķist vienkārša, es gribētu katru brīdi pavadīt ar tevi.
No vienkāršiem vakariem mājās, līdz pat viss parastākajiem ikdienas notikumiem. 
Lai arī cik garlaicīgi tie varētu šķist, ar tevi tie kļūst īpaši.
      `,
    },
    {
      title: "Mīlēt bez ierobežojumiem",
      text: `
Es vēlos kopā ar tevi izveidot atmosfēru, kurā mēs abi jūtamies mīlēti un atbalstīti.
Es vēlos mīlēt viens otru neuztraucoties par citu domām vai sakāmā,
es vēlos augt kopā un atbalstīt viens otru.
      `,
    },
    {
      title: "Būt komandai",
      text: `
Es vienmēr vēlos redzēt mūs kā komandu. Neatkarīgi vai tas ir ikdienā vai lielos dzīves notikumos,
es gribu lai mes vienmēr būtu viens otram atbalsts, gan labajos, gan sliktajos brīžos.
      `,
    },
  ];

  return (
    <PageWrapper backTo="/">
      <div className="absolute inset-0 overflow-y-auto px-4">
        <div className="max-w-4xl mx-auto pt-24 pb-24">
          <div className="bg-transparent p-8">
            <h1 className="text-5xl text-gray-800 font-bold mb-8 text-center">
              Mērķi
            </h1>

            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-lg p-6"
                >
                  <h2 className="text-xl text-gray-800 font-semibold mb-3">
                    {goal.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {goal.text}
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
