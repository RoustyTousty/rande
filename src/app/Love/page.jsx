"use client";
import PageWrapper from "@/app/components/PageWrapper";

export default function Page() {
  const reasons = [
    "Katru dienu dod motivāciju būt labākam cilvēkam.",
    "Jo atbalsti mani visū, ko daru.",
    "Tas cik ļoti tu izproti cilvēkus.",
    "Tas kā tu vienmēr esi gatava palīdzēt citiem.",
    "Padari garlaicīgās dienas daudz interesantākas.",
    "Cik jauka tu esi pret visiem un kā tu rūpējies par citiem.",
    "Tas kā tu vienmēr padomā par citiem.",
    "Kā tu rūpējies par mani, kad esmu slims.",
    "Tavi padomi un gudrība.",
    "Tas cik tu competitive paliec visur",
    "Tavs kodiens (sāp, but cute)",
    "Tava mīlestība...",
    "Tava neatlaidība pat, kad paliek smagi.",
    "Tava spēja izrunāt problēmas.",
    "Dzīvot ar tevi ir ka nepartraukts piedzīvojums.",
    "Tas, ka tu nekad neļauj nevienam pārspēt tevi.",
    "Tavi mazie mood swings, vienā brīdī sad nākamajā party.",
    "Tava dzīves gudrība",
    "Tas, ka tu vienmār esi tu pati.",
    "Tava izpratne ikdienas dzīvē",
    "Dzīvojot Dānijā, man katru dienu ir uz kautko atskatīties.",
    "Man tu ļoti pietrūksti, kad neesam kopā.",
    "Tavi yapping sessions.",
    "Tavi deeptalk.",
    "Tavs maigais pieskāriens",
    "Tas cik tu dirrect esi ar to, ko vēlies.",
    "Tavi nelielie dramatic momenti. (cute)",
    "Tava centība",
    "Drošības sajūta, ko jūtu kad esmu ar tevi.",
    "Your freakiness 😛",
    "You.",
    "Tas cik pacietīga tu esi ar manīm.",
    "Tas cik tu mani saproti bez teikšanas.",
    "Tavi smiekli un smaids (Most beutifull person).",
  ];

  return (
    <PageWrapper backTo="/">
      <div className="absolute inset-0 overflow-y-auto px-4">
        <div className="max-w-3xl mx-auto pt-24 pb-24">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
              Kāpēc es tevi mīlu
            </h1>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-800 leading-relaxed"
                >
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
