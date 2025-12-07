import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photographer: "alexandra" | "maria";
}

export const ContactDialog = ({
  open,
  onOpenChange,
  photographer,
}: ContactDialogProps) => {
  const contacts = {
    alexandra: {
      name: "Александрой",
      telegram: "https://t.me/aleksa25t",
      whatsapp: "https://wa.me/79134674356",
      max: "https://max.ru/u/f9LHodD0cOKltHesJSFTYiwol-CUKOakGS_kEiFrs593Sq2oB-mL2dGG9lw",
    },
    maria: {
      name: "Марией",
      telegram: "https://t.me/+79139083148",
      whatsapp: "https://wa.me/79139083148",
      max: undefined,
    },
  };

  const contact = contacts[photographer];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-left">
            Связаться с {contact.name}
          </DialogTitle>
          <DialogDescription className="text-left">
            Выберите удобный способ связи
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <a
            href={contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Icon name="Send" className="text-blue-500" size={24} />
            <div className="flex-1">
              <div className="font-semibold">Telegram</div>
              <div className="text-sm text-gray-600">Написать в Телеграм</div>
            </div>
            <Icon name="ExternalLink" size={16} />
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <Icon name="MessageCircle" className="text-green-500" size={24} />
            <div className="flex-1">
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-gray-600">Написать в WhatsApp</div>
            </div>
            <Icon name="ExternalLink" size={16} />
          </a>

          {contact.max && (
            <a
              href={contact.max}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <Icon name="MessageSquare" className="text-purple-500" size={24} />
              <div className="flex-1">
                <div className="font-semibold">MAX</div>
                <div className="text-sm text-gray-600">Написать в MAX</div>
              </div>
              <Icon name="ExternalLink" size={16} />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;