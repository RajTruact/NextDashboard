"use client";
import React, { useState, useEffect } from "react";
import Button from "@/src/components/ui/button/Button";
import Label from "@/src/components/ui/input/Label";

export default function AppSettings() {
  const [theme, setTheme] = useState("system");
  const [accentColor, setAccentColor] = useState("#3b82f6");
  const [fontSize, setFontSize] = useState("medium");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [language, setLanguage] = useState("english");

  // Load saved settings on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme") || "system";
    const savedAccentColor = localStorage.getItem("accentColor") || "#3b82f6";
    const savedFontSize = localStorage.getItem("fontSize") || "medium";
    const savedReducedMotion = localStorage.getItem("reducedMotion") === "true";
    const savedLanguage = localStorage.getItem("language") || "english";

    setTheme(savedTheme);
    setAccentColor(savedAccentColor);
    setFontSize(savedFontSize);
    setReducedMotion(savedReducedMotion);
    setLanguage(savedLanguage);
  }, []);

  // Apply theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  // Apply accent color changes
  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", accentColor);
    localStorage.setItem("accentColor", accentColor);
  }, [accentColor]);

  // Apply other settings
  const applySettings = () => {
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("reducedMotion", reducedMotion.toString());
    localStorage.setItem("language", language);
    
    // Show success feedback
    alert("Settings saved successfully!");
  };

  const resetSettings = () => {
    setTheme("system");
    setAccentColor("#3b82f6");
    setFontSize("medium");
    setReducedMotion(false);
    setLanguage("english");
  };

  const accentColors = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#10b981" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Red", value: "#ef4444" },
    { name: "Yellow", value: "#f59e0b" },
    { name: "Pink", value: "#ec4899" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">Application Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Customize your application experience according to your preferences.
        </p>
      </div>

      <div className="space-y-8">
        {/* Theme Settings */}
        <div className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">Appearance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="mb-3 block">Theme</Label>
              <div className="space-y-3">
                {[
                  { id: "light", name: "Light", icon: "☀️" },
                  { id: "dark", name: "Dark", icon: "🌙" },
                  { id: "system", name: "System Default", icon: "💻" },
                ].map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      theme === option.id
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setTheme(option.id)}
                  >
                    <span className="text-xl mr-3">{option.icon}</span>
                    <span className="text-gray-800 dark:text-white/90">{option.name}</span>
                    {theme === option.id && (
                      <span className="ml-auto text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Accent Color</Label>
              <div className="grid grid-cols-3 gap-3">
                {accentColors.map((color) => (
                  <div
                    key={color.value}
                    className={`h-12 rounded-lg cursor-pointer flex items-center justify-center ${
                      accentColor === color.value ? "ring-2 ring-offset-2 ring-blue-500" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setAccentColor(color.value)}
                  >
                    {accentColor === color.value && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center">
                <div 
                  className="w-8 h-8 rounded-md mr-3 border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {accentColors.find(c => c.value === accentColor)?.name || "Custom"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Settings */}
        <div className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">Accessibility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="mb-3 block">Font Size</Label>
              <div className="space-y-3">
                {[
                  { id: "small", name: "Small" },
                  { id: "medium", name: "Medium" },
                  { id: "large", name: "Large" },
                  { id: "xlarge", name: "Extra Large" },
                ].map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      fontSize === option.id
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setFontSize(option.id)}
                  >
                    <span className="text-gray-800 dark:text-white/90">{option.name}</span>
                    {fontSize === option.id && (
                      <span className="ml-auto text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Other Options</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-800 dark:text-white/90">Reduce Motion</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Minimize animations and transitions
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={reducedMotion}
                      onChange={() => setReducedMotion(!reducedMotion)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div>
                  <Label className="mb-2 block">Language</Label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="japanese">Japanese</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={resetSettings}>
            Reset to Defaults
          </Button>
          <Button onClick={applySettings}>
            Save Changes
          </Button>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --color-primary: ${accentColor};
        }
        
        [data-theme="light"] {
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --text-primary: #111827;
          --text-secondary: #6b7280;
          --border-color: #e5e7eb;
        }
        
        [data-theme="dark"] {
          --bg-primary: #111827;
          --bg-secondary: #1f2937;
          --text-primary: #f9fafb;
          --text-secondary: #d1d5db;
          --border-color: #374151;
        }
        
        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          transition: background-color 0.3s, color 0.3s;
        }
        
        ${reducedMotion ? `
        * {
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
        }
        ` : ''}
        
        ${fontSize === 'small' ? `html { font-size: 14px; }` : ''}
        ${fontSize === 'medium' ? `html { font-size: 16px; }` : ''}
        ${fontSize === 'large' ? `html { font-size: 18px; }` : ''}
        ${fontSize === 'xlarge' ? `html { font-size: 20px; }` : ''}
      `}</style>
    </div>
  );
}