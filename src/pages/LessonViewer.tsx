import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import React from "react";

// Example lesson data. Replace this with your actual data source.
const lessons = {
  "navigating-life-transitions": {
    title: "Navigating Life Transitions",
    subtitle: "Coping with college, career, and independence challenges",
    tags: [
      { label: "Life Skills", color: "bg-emerald-200 text-emerald-800" },
      { label: "Medium", color: "bg-orange-200 text-orange-800" },
      { label: "20 min", color: "bg-gray-200 text-gray-800", icon: "⏱️" },
    ],
    pdfUrl: "/pdfs/navigating-life-transitions.pdf",
    summary:
      "This interactive lesson contains valuable insights and practical exercises designed specifically for Young Adults.",
  },
  // Add more lessons here...
};

export default function LessonViewer() {
  const { lessonName } = useParams();
  const navigate = useNavigate();

  // Map lessonName param to lesson data (use slugs in your app).
  const lesson = lessons[(lessonName as string) || ""] || lessons["navigating-life-transitions"];

  return (
    <div
      className="min-h-screen font-quicksand relative flex flex-col"
      style={{
        backgroundImage: `url('/assets/sign-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-10 relative z-10">
        <div className="w-full px-2 sm:px-0 sm:max-w-md mx-auto">
          {/* Back link */}
          <button
            className="flex items-center text-sm text-blue-800 mb-3 sm:mb-4 hover:underline font-inter"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </button>
          {/* Lesson Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-8 text-center font-quicksand">
            {/* Title, subtitle */}
            <h1 className="text-xl sm:text-2xl font-bold mb-2 font-quicksand">{lesson.title}</h1>
            <p className="text-gray-500 mb-4 sm:mb-5 font-inter text-sm sm:text-base">{lesson.subtitle}</p>
            {/* Tags */}
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
              {lesson.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color} flex items-center gap-1 font-inter`}
                >
                  {tag.icon ? <span>{tag.icon}</span> : null}
                  {tag.label}
                </span>
              ))}
            </div>
            {/* Lesson Content Box */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 flex flex-col items-center max-h-52 sm:max-h-none overflow-y-auto">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-2" />
              <h2 className="font-semibold text-base sm:text-lg mb-2 font-quicksand">Lesson Content</h2>
              <p className="text-gray-500 text-sm mb-4 sm:mb-5 font-inter">{lesson.summary}</p>
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-2 flex-wrap w-full">
                <a href={lesson.pdfUrl} download className="w-full sm:w-auto">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 w-full font-quicksand text-sm sm:text-base">
                    <span className="mr-2">⬇️</span> Download PDF
                  </Button>
                </a>
                <a href={lesson.pdfUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="px-6 w-full font-quicksand text-sm sm:text-base">
                    <span className="mr-2">👁️</span> View Online
                  </Button>
                </a>
              </div>
            </div>
            {/* Mark as Complete Button */}
            <Button
              disabled
              className="w-full bg-gradient-to-r from-green-200 to-yellow-200 text-green-800 font-semibold cursor-not-allowed font-quicksand text-sm sm:text-base"
            >
              Mark as Complete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}