// app/super-admin/theme/page.js
"use client";
import { useState, useEffect } from "react";

export default function ThemeCustomizationPage() {
  const [userRole, setUserRole] = useState("superAdmin"); // This would come from your auth system
  const [themeSettings, setThemeSettings] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("brand"); // 'brand', 'functional', 'all'

  // Define all the color variables from your CSS
  const colorVariables = [
    {
      name: "Primary Brand",
      key: "brand-500",
      var: "--color-brand-500",
      value: "#465FFF",
      category: "brand",
    },
    {
      name: "Primary Brand Dark",
      key: "brand-600",
      var: "--color-brand-600",
      value: "#3641F5",
      category: "brand",
    },
    {
      name: "Primary Brand Light",
      key: "brand-400",
      var: "--color-brand-400",
      value: "#7592FF",
      category: "brand",
    },
    {
      name: "Blue Light",
      key: "blue-light-500",
      var: "--color-blue-light-500",
      value: "#0BA5EC",
      category: "brand",
    },
    {
      name: "Gray Background",
      key: "gray-50",
      var: "--color-gray-50",
      value: "#F9FAFB",
      category: "functional",
    },
    {
      name: "Gray Text",
      key: "gray-700",
      var: "--color-gray-700",
      value: "#344054",
      category: "functional",
    },
    {
      name: "Success Color",
      key: "success-500",
      var: "--color-success-500",
      value: "#12B76A",
      category: "functional",
    },
    {
      name: "Error Color",
      key: "error-500",
      var: "--color-error-500",
      value: "#F04438",
      category: "functional",
    },
    {
      name: "Warning Color",
      key: "warning-500",
      var: "--color-warning-500",
      value: "#F79009",
      category: "functional",
    },
    {
      name: "Theme Pink",
      key: "theme-pink-500",
      var: "--color-theme-pink-500",
      value: "#EE46BC",
      category: "brand",
    },
    {
      name: "Theme Purple",
      key: "theme-purple-500",
      var: "--color-theme-purple-500",
      value: "#7A5AF8",
      category: "brand",
    },
  ];

  // Group colors by category
  const brandColors = colorVariables.filter(
    (color) => color.category === "brand"
  );
  const functionalColors = colorVariables.filter(
    (color) => color.category === "functional"
  );

  // Initialize theme settings from CSS variables
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const initialSettings = {};

      colorVariables.forEach((color) => {
        const value = getComputedStyle(root).getPropertyValue(color.var).trim();
        initialSettings[color.key] = value || color.value;
      });

      setThemeSettings(initialSettings);
    }
  }, []);

  // If not superAdmin, show access denied message
  if (userRole !== "superAdmin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You don't have permission to customize the theme. Only superAdmins
            can access this feature.
          </p>
        </div>
      </div>
    );
  }

  const handleColorChange = (key, value) => {
    const newSettings = { ...themeSettings, [key]: value };
    setThemeSettings(newSettings);

    // Apply changes immediately to the document
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const variable = colorVariables.find((c) => c.key === key)?.var;
      if (variable) {
        root.style.setProperty(variable, value);
      }
    }
  };

  const saveTheme = () => {
    // Save to localStorage
    localStorage.setItem("customTheme", JSON.stringify(themeSettings));

    // Show success message
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const resetTheme = () => {
    // Reset to default values
    const defaultSettings = {};
    colorVariables.forEach((color) => {
      defaultSettings[color.key] = color.value;

      // Reset CSS variable
      if (typeof window !== "undefined") {
        const root = document.documentElement;
        root.style.setProperty(color.var, color.value);
      }
    });

    setThemeSettings(defaultSettings);
    localStorage.removeItem("customTheme");
  };

  const ColorPicker = ({ color }) => (
    <div className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {color.name}
        </label>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            {themeSettings[color.key]}
          </span>
          <div
            className="w-6 h-6 rounded border border-gray-300 dark:border-gray-600 shadow-sm"
            style={{ backgroundColor: themeSettings[color.key] }}
          ></div>
        </div>
      </div>
      <input
        type="color"
        value={themeSettings[color.key] || color.value}
        onChange={(e) => handleColorChange(color.key, e.target.value)}
        className="w-full h-10 cursor-pointer rounded-md border border-gray-300 dark:border-gray-600"
      />
      <input
        type="text"
        value={themeSettings[color.key] || color.value}
        onChange={(e) => handleColorChange(color.key, e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Enter hex code"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Theme Customization
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Customize the application color scheme. Changes will be applied
            immediately for preview. Your changes are saved to this browser
            only.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Color Controls */}
          <div className="lg:w-2/3">
            <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab("brand")}
                    className={`py-3 px-6 text-sm font-medium border-b-2 ${
                      activeTab === "brand"
                        ? "border-brand-500 text-brand-600 dark:text-brand-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    Brand Colors
                  </button>
                  <button
                    onClick={() => setActiveTab("functional")}
                    className={`py-3 px-6 text-sm font-medium border-b-2 ${
                      activeTab === "functional"
                        ? "border-brand-500 text-brand-600 dark:text-brand-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    Functional Colors
                  </button>
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`py-3 px-6 text-sm font-medium border-b-2 ${
                      activeTab === "all"
                        ? "border-brand-500 text-brand-600 dark:text-brand-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    All Colors
                  </button>
                </nav>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeTab === "brand" &&
                    brandColors.map((color) => (
                      <ColorPicker key={color.key} color={color} />
                    ))}

                  {activeTab === "functional" &&
                    functionalColors.map((color) => (
                      <ColorPicker key={color.key} color={color} />
                    ))}

                  {activeTab === "all" &&
                    colorVariables.map((color) => (
                      <ColorPicker key={color.key} color={color} />
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <button
                onClick={saveTheme}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Save Theme
              </button>
              <button
                onClick={resetTheme}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors flex items-center justify-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Reset to Default
              </button>

              {isSaved && (
                <div className="ml-auto flex items-center px-4 py-3 bg-success-50 text-success-700 rounded-lg border border-success-200 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500/30">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Theme saved successfully!
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Live Preview
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                    UI Elements
                  </h3>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors">
                        Primary Button
                      </button>
                      <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
                        Secondary Button
                      </button>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300">
                        Card with subtle background
                      </p>
                    </div>

                    <div className="p-3 border border-brand-200 bg-brand-50 dark:bg-brand-500/20 dark:border-brand-500/30 rounded-lg">
                      <p className="text-brand-700 dark:text-brand-300">
                        Brand accent element with informational content
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                    Status Indicators
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-2 rounded-md bg-success-50 dark:bg-success-500/20">
                      <div className="w-3 h-3 rounded-full bg-success-500"></div>
                      <span className="text-success-700 dark:text-success-400 text-sm">
                        Success message with a longer text
                      </span>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-md bg-error-50 dark:bg-error-500/20">
                      <div className="w-3 h-3 rounded-full bg-error-500"></div>
                      <span className="text-error-700 dark:text-error-400 text-sm">
                        Error notification message
                      </span>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-md bg-warning-50 dark:bg-warning-500/20">
                      <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                      <span className="text-warning-700 dark:text-warning-400 text-sm">
                        Warning alert for attention
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                    Typography
                  </h3>

                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Heading 1
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Heading 2
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Regular paragraph text with{" "}
                      <a
                        href="#"
                        className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
                      >
                        a link example
                      </a>{" "}
                      for reference.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Small helper text or caption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
