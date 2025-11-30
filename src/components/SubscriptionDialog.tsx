import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SubscriptionDialog = ({
  open,
  onOpenChange,
}: SubscriptionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Дарим 500₽ ! 🎁</DialogTitle>
          <DialogDescription className="text-center">
            Подпишитесь на наши соцсети и получите скидку 500₽ на любую услугу
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <a
            href="https://vk.com/club_photograph_novosibirsk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <svg
              className="text-blue-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.1-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z"></path>
            </svg>
            <div className="flex-1">
              <div className="font-semibold">Группа ВКонтакте Марии</div>
              <div className="text-sm text-gray-600">Подписаться на группу</div>
            </div>
            <Icon name="ExternalLink" size={16} />
          </a>

          <a
            href="https://t.me/online_photosessiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Icon name="Send" className="text-blue-500" size={24} />
            <div className="flex-1">
              <div className="font-semibold">Телеграм канал Александры</div>
              <div className="text-sm text-gray-600">Подписаться на канал</div>
            </div>
            <Icon name="ExternalLink" size={16} />
          </a>
        </div>
        <p className="text-xs text-center text-gray-500 mt-4">После подписки напишите фотографу и получите скидку</p>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionDialog;