// app/super-admin/theme/page.js
"use client";
import { useState, useEffect } from "react";

export default function ThemeCustomizationPage() {
  const [userRole, setUserRole] = useState("superAdmin"); // This would come from your auth system
  const [themeSettings, setThemeSettings] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  // Define all the color variables from your CSS
  const colorVariables = [
    {
      name: "Primary Brand",
      key: "brand-500",
      var: "--color-brand-500",
      value: "#465FFF",
    },
    {
      name: "Primary Brand Dark",
      key: "brand-600",
      var: "--color-brand-600",
      value: "#3641F5",
    },
    {
      name: "Primary Brand Light",
      key: "brand-400",
      var: "--color-brand-400",
      value: "#7592FF",
    },
    {
      name: "Blue Light",
      key: "blue-light-500",
      var: "--color-blue-light-500",
      value: "#0BA5EC",
    },
    {
      name: "Gray Background",
      key: "gray-50",
      var: "--color-gray-50",
      value: "#F9FAFB",
    },
    {
      name: "Gray Text",
      key: "gray-700",
      var: "--color-gray-700",
      value: "#344054",
    },
    {
      name: "Success Color",
      key: "success-500",
      var: "--color-success-500",
      value: "#12B76A",
    },
    {
      name: "Error Color",
      key: "error-500",
      var: "--color-error-500",
      value: "#F04438",
    },
    {
      name: "Warning Color",
      key: "warning-500",
      var: "--color-warning-500",
      value: "#F79009",
    },
    {
      name: "Theme Pink",
      key: "theme-pink-500",
      var: "--color-theme-pink-500",
      value: "#EE46BC",
    },
    {
      name: "Theme Purple",
      key: "theme-purple-500",
      var: "--color-theme-purple-500",
      value: "#7A5AF8",
    },
  ];

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
    <div className="flex flex-col gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {color.name}
        </label>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">
            {themeSettings[color.key]}
          </span>
          <div
            className="w-6 h-6 rounded border border-gray-300"
            style={{ backgroundColor: themeSettings[color.key] }}
          ></div>
        </div>
      </div>
      <input
        type="color"
        value={themeSettings[color.key] || color.value}
        onChange={(e) => handleColorChange(color.key, e.target.value)}
        className="w-full h-10 cursor-pointer"
      />
      <input
        type="text"
        value={themeSettings[color.key] || color.value}
        onChange={(e) => handleColorChange(color.key, e.target.value)}
        className="w-full px-3 py-1 text-sm border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Enter hex code"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Theme Customization
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize the application color scheme. Changes will be applied
            immediately for preview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {colorVariables.map((color) => (
            <ColorPicker key={color.key} color={color} />
          ))}
        </div>

        <div className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <button
            onClick={saveTheme}
            className="px-6 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors"
          >
            Save Theme
          </button>
          <button
            onClick={resetTheme}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            Reset to Default
          </button>

          {isSaved && (
            <div className="ml-auto flex items-center px-4 py-2 bg-success-50 text-success-700 rounded-lg">
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

        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Preview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                UI Elements
              </h3>

              <div className="space-y-4">
                <button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg">
                  Primary Button
                </button>

                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Card with background
                  </p>
                </div>

                <div className="p-3 border border-brand-200 bg-brand-50 dark:bg-brand-500/20 rounded-lg">
                  <p className="text-brand-700 dark:text-brand-300">
                    Brand accent element
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                Status Indicators
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <span className="text-success-700 dark:text-success-400">
                    Success indicator
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error-500"></div>
                  <span className="text-error-700 dark:text-error-400">
                    Error indicator
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                  <span className="text-warning-700 dark:text-warning-400">
                    Warning indicator
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
