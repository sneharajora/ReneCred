const RFP = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm  p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">230924001</h1>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                EV
              </span>
            </div>

            <h2 className="text-lg font-medium mb-4">Call for Proposals under WISE-SCOPE Fellowship</h2>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Start Date</span>
                  <span>10/10/2024</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">End Date</span>
                  <span>15/11/2024</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Deadline Date</span>
                  <span>05/10/2024</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Completion Date</span>
                  <span>13/11/2024</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Hours</span>
                  <span>100</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Total Scientists</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Hrs/Scientist</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">Generate Invoice</button>
          </div>
        </div>

        <div className="w-full lg:w-80">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-red-600 mb-3">Attachment</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">RFP230924001_doc.pdf</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm  p-4">
              <h3 className="font-medium text-red-600 mb-3">Amendment</h3>
              <div className="space-y-3">
                {[
                  { date: "21 Sep, 2024", file: "RFP230924001_doc.pdf" },
                  { date: "25 Sep, 2024", file: "RFP230924001_doc.pdf" },
                  { date: "30 Sep, 2024", file: "RFP230924001_doc.pdf" },
                ].map((amendment, index) => (
                  <div key={index} className="border-l-2 border-red-200 pl-3">
                    <div className="text-xs text-red-600 mb-1">{amendment.date}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <span className="inline-block bg-gray-100 text-xs px-2 py-1 rounded">{amendment.file}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RFP
