export default function Table({
  cols,
  children,
}: {
  cols: Array<String>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-white-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols?.map((c) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
