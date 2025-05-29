import { FileText, TrendingUp, CreditCard } from "lucide-react";
const services = [
  {
    name: "Term Loans",
    icon: FileText,
    description:
      "Our fixed-rate term loans range from $10,000 to $2,000,000, with repayment terms of 1 to 5 years. They’re ideal for long-term investments like equipment or expansion, and there are no prepayment penalties.",
  },
  {
    name: "Revenue-Based Financing",
    icon: TrendingUp,
    description:
      "We offer $5,000 to $2,000,000 in funding based on your business revenue—not your personal credit. Repayments adjust with your cash flow, using flexible daily or weekly deductions.",
  },
  {
    name: "Lines of Credit",
    icon: CreditCard,
    description:
      "Get up to $500,000 in flexible credit with minimal paperwork and quick access to funds. Draw only what you need, repay on your schedule, and reuse the credit as it becomes available.",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Funding Solutions
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Flexible funding options tailored for your business needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center text-center transition"
          >
            <service.icon className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
