"use client";
import React, { useState } from "react";
import { useModal } from "@/src/hooks/useModaol";
import { Modal } from "@/src/components/ui/modal";
import Button from "@/src/components/ui/button/Button";
import Input from "@/src/components/ui/input/InputField";
import Label from "@/src/components/ui/input/Label";
import { MailIcon } from "lucide-react";

export default function UserEmailCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(1); // 1 = verify, 2 = update email

  const handleVerify = (e) => {
    e.preventDefault();
    // Call API to verify current email + password
    console.log("Verifying identity...");
    // On success:
    setStep(2);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Call API to update email
    console.log("Updating email...");
    closeModal();
    setStep(1); // reset flow for next open
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-2">
              Email
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Change your email address linked to this account.
            </p>
            <p className="mt-2 text-sm font-medium text-gray-800 dark:text-white/90">
              Jayantkumar@gmail.com
            </p>
          </div>

          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <MailIcon className="w-5 h-5" />
            Change Email
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[600px] m-4">
        <div className="relative w-full p-4 bg-white rounded-3xl dark:bg-gray-900 lg:p-10">
          {step === 1 ? (
            <>
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Verify Identity
              </h4>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Enter your current email and password to continue.
              </p>
              <form className="flex flex-col gap-5" onSubmit={handleVerify}>
                <div>
                  <Label>Current Email</Label>
                  <Input type="email" placeholder="Enter your email" required />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex items-center gap-3 mt-6 lg:justify-end">
                  <Button size="sm" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button size="sm" type="submit">
                    Continue
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Update Email
              </h4>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Enter your new email address.
              </p>
              <form className="flex flex-col gap-5" onSubmit={handleSave}>
                <div>
                  <Label>New Email</Label>
                  <Input type="email" placeholder="Enter new email" required />
                </div>
                <div>
                  <Label>Confirm New Email</Label>
                  <Input
                    type="email"
                    placeholder="Re-enter new email"
                    required
                  />
                </div>
                <div className="flex items-center gap-3 mt-6 lg:justify-end">
                  <Button size="sm" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button size="sm" type="submit">
                    Save Changes
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
