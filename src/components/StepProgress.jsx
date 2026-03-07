const StepProgress = ({ currentStep }) => {

  const steps = [1,2,3,4,5]

  return (
    <div className="flex mb-8 w-[70%] mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex-1 flex items-center">

          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold
            ${
              currentStep > step
                ? "bg-green-500 text-white"
                : currentStep === step
                ? "bg-blue-600 text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {step}
          </div>

          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-1
              ${currentStep > step ? "bg-green-500" : "bg-gray-300"}`}
            ></div>
          )}

        </div>
      ))}
    </div>
  )
}

export default StepProgress
