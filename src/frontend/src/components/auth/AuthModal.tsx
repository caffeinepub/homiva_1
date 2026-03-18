import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const { login, loginStatus, identity, clear } = useInternetIdentity();
  const isLoggingIn = loginStatus === "logging-in";
  const isSuccess = loginStatus === "success" || !!identity;

  const handleLogin = async () => {
    try {
      await login();
      toast.success("Logged in successfully!");
      onClose();
    } catch {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    clear();
    toast.success("Logged out successfully.");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl" data-ocid="auth.modal">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {isSuccess ? "Account" : "Welcome to HOMIVA"}
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
              <CheckCircle2 className="text-teal-600" size={36} />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Logged in as
              <br />
              <span className="font-mono text-xs text-gray-500 break-all">
                {identity?.getPrincipal().toString().slice(0, 20)}...
              </span>
            </p>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full rounded-full border-red-200 text-red-600 hover:bg-red-50"
              data-ocid="auth.cancel_button"
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-2">
            <div className="bg-teal-50 rounded-xl p-4 flex gap-3">
              <Shield className="text-teal-600 shrink-0 mt-0.5" size={18} />
              <div className="text-sm text-teal-800">
                <p className="font-semibold mb-0.5">Secure Login</p>
                <p className="text-teal-600 text-xs">
                  We use Internet Identity for secure, passwordless
                  authentication. Your identity is protected.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Button
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="w-full rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                data-ocid="auth.submit_button"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Connecting...
                  </>
                ) : (
                  "Login / Register"
                )}
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              By continuing, you agree to HOMIVA's Terms of Service and Privacy
              Policy.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
