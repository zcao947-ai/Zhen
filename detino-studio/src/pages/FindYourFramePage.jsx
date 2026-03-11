import { useState } from "react";
import { Link } from "react-router-dom";

const faceShapes = [
  {
    shape: "Oval",
    description: "Balanced proportions, slightly wider at the forehead than the jaw.",
    best: ["Square Frame", "Cat Eye", "Oval Frame", "Sunglasses"],
    avoid: "Almost any style works! Avoid very large frames that overpower your face.",
    icon: "⬭",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    tip: "You're the lucky ones — nearly every frame shape flatters an oval face. Lean into bold shapes to show off your symmetry.",
    products: ["EW001", "EW003", "EW004"],
  },
  {
    shape: "Round",
    description: "Similar width and length, with full cheeks and a rounded jawline.",
    best: ["Square Frame", "Rectangular"],
    avoid: "Round or oval frames that mirror the face shape, making it appear wider.",
    icon: "○",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
    tip: "Angular frames add definition and create the illusion of length. Go for square or rectangular shapes to balance soft curves.",
    products: ["EW001", "EW005"],
  },
  {
    shape: "Square",
    description: "Strong, defined jawline with a wide forehead and angular features.",
    best: ["Oval Frame", "Round", "Cat Eye"],
    avoid: "Square frames that emphasize strong angles.",
    icon: "□",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    tip: "Soften your structure with curves. Oval and round frames balance your natural angularity and create a harmonious look.",
    products: ["EW002", "EW003", "EW007"],
  },
  {
    shape: "Heart",
    description: "Wider forehead, tapering to a narrow chin.",
    best: ["Oval Frame", "Cat Eye", "Light-colored frames"],
    avoid: "Top-heavy frames that make the forehead look wider.",
    icon: "♡",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
    tip: "Frames that are wider at the bottom help balance your features. Cat eyes can work beautifully if the sweep is subtle.",
    products: ["EW002", "EW007", "EW008"],
  },
  {
    shape: "Oblong",
    description: "Longer than it is wide, with a long straight cheek line.",
    best: ["Oversized frames", "Deep frames", "Square Frame"],
    avoid: "Small or narrow frames that elongate the face further.",
    icon: "▭",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    tip: "Add depth with frames that have strong vertical height. Oversized and deep frames visually shorten the face.",
    products: ["EW001", "EW006"],
  },
];

const quizQuestions = [
  {
    id: "jaw",
    question: "How would you describe your jawline?",
    options: [
      { label: "Soft and rounded", shapes: ["Round", "Oval"] },
      { label: "Defined and angular", shapes: ["Square", "Oblong"] },
      { label: "Narrow and pointed", shapes: ["Heart", "Oval"] },
      { label: "Wide but soft", shapes: ["Round", "Square"] },
    ],
  },
  {
    id: "forehead",
    question: "Is your forehead wider, narrower, or the same as your jaw?",
    options: [
      { label: "Wider than my jaw", shapes: ["Heart", "Oval"] },
      { label: "About the same", shapes: ["Square", "Oval"] },
      { label: "Narrower than my jaw", shapes: ["Round"] },
      { label: "Hard to tell", shapes: ["Oval"] },
    ],
  },
  {
    id: "length",
    question: "Is your face longer or wider?",
    options: [
      { label: "Much longer than wide", shapes: ["Oblong"] },
      { label: "Slightly longer than wide", shapes: ["Oval", "Heart"] },
      { label: "About equal", shapes: ["Round", "Square"] },
      { label: "Wider than long", shapes: ["Round"] },
    ],
  },
];

export default function FindYourFramePage() {
  const [mode, setMode] = useState("browse"); // 'browse' | 'quiz'
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  function handleAnswer(option) {
    const newAnswers = [...answers, option.shapes];
    if (quizStep < quizQuestions.length - 1) {
      setAnswers(newAnswers);
      setQuizStep(quizStep + 1);
    } else {
      // Tally
      const counts = {};
      newAnswers.flat().forEach((shape) => {
        counts[shape] = (counts[shape] || 0) + 1;
      });
      const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(faceShapes.find((f) => f.shape === best));
    }
  }

  function resetQuiz() {
    setQuizStep(0);
    setAnswers([]);
    setResult(null);
  }

  return (
    <main className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-center">
        <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Style Guide</p>
        <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-4">Find Your Frame</h1>
        <p className="text-stone-500 leading-relaxed">
          The right frame is the one that feels like an extension of yourself. Use our shape guide or take the quiz to discover your perfect match.
        </p>

        {/* Mode toggle */}
        <div className="mt-8 inline-flex border border-stone-300">
          <button
            onClick={() => { setMode("browse"); resetQuiz(); }}
            className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-colors ${
              mode === "browse" ? "bg-stone-900 text-white" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Browse by Shape
          </button>
          <button
            onClick={() => { setMode("quiz"); resetQuiz(); }}
            className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-colors ${
              mode === "quiz" ? "bg-stone-900 text-white" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Take the Quiz
          </button>
        </div>
      </section>

      {/* ── BROWSE MODE ── */}
      {mode === "browse" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-16">
            {faceShapes.map((face, i) => (
              <div
                key={face.shape}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden bg-stone-50 aspect-[4/3]">
                    <img
                      src={face.image}
                      alt={`${face.shape} face shape`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-2xl mr-2">{face.icon}</span>
                      <span className="font-serif text-stone-800 text-lg">{face.shape}</span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Face Shape</p>
                  <h2 className="font-serif text-3xl text-stone-900 mb-3">{face.shape}</h2>
                  <p className="text-stone-600 mb-4">{face.description}</p>
                  <p className="text-stone-700 leading-relaxed mb-6 italic font-serif">"{face.tip}"</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-stone-50 p-4">
                      <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Best Styles</p>
                      <ul className="space-y-1">
                        {face.best.map((b) => (
                          <li key={b} className="text-sm text-stone-700 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-stone-400" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-4">
                      <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Consider Avoiding</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{face.avoid}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {face.products.map((id) => (
                      <Link
                        key={id}
                        to={`/product/${id}`}
                        className="text-xs tracking-wider uppercase px-4 py-2 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                      >
                        Shop for {face.shape}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── QUIZ MODE ── */}
      {mode === "quiz" && !result && (
        <section className="max-w-2xl mx-auto px-4 pb-24">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-stone-400 mb-2">
              <span>Question {quizStep + 1} of {quizQuestions.length}</span>
              <span>{Math.round(((quizStep) / quizQuestions.length) * 100)}%</span>
            </div>
            <div className="h-px bg-stone-200">
              <div
                className="h-full bg-stone-900 transition-all duration-500"
                style={{ width: `${(quizStep / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 mb-8">
            {quizQuestions[quizStep].question}
          </h2>
          <div className="space-y-3">
            {quizQuestions[quizStep].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt)}
                className="w-full text-left px-6 py-4 border border-stone-200 text-stone-700 hover:border-stone-900 hover:bg-stone-50 transition-all text-sm tracking-wide group"
              >
                <span className="flex items-center justify-between">
                  {opt.label}
                  <span className="text-stone-300 group-hover:text-stone-900 transition-colors">→</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── QUIZ RESULT ── */}
      {mode === "quiz" && result && (
        <section className="max-w-3xl mx-auto px-4 pb-24">
          <div className="text-center mb-10">
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-2">Your Result</p>
            <div className="text-6xl mb-3">{result.icon}</div>
            <h2 className="font-serif text-4xl text-stone-900 mb-3">
              You have a {result.shape} face
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-lg mx-auto">{result.description}</p>
          </div>

          <div className="bg-stone-50 p-8 mb-8">
            <p className="font-serif text-lg text-stone-800 italic mb-4">"{result.tip}"</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Best Styles</p>
                <ul className="space-y-1">
                  {result.best.map((b) => (
                    <li key={b} className="text-sm text-stone-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Consider Avoiding</p>
                <p className="text-sm text-stone-600 leading-relaxed">{result.avoid}</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-stone-500 text-sm mb-4">Frames curated for your shape:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {result.products.map((id) => (
                <Link
                  key={id}
                  to={`/product/${id}`}
                  className="text-sm tracking-wider uppercase px-6 py-2.5 bg-stone-900 text-white hover:bg-stone-700 transition-colors"
                >
                  View Frame
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="text-sm text-stone-400 uppercase tracking-wider hover:text-stone-900 transition-colors"
            >
              ← Retake Quiz
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
