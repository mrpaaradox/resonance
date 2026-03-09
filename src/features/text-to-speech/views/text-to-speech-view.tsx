import { TextInputPanel } from "../components/text-input-pannel";

export function TextToSpeechView() {
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col">
        <TextInputPanel />
        {/* Voice Preview Placeholder */}
      </div>
      {/* Settings Pannel */}
    </div>
  );
}
