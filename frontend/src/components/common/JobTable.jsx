import React from "react";

const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        
        <thead>
          <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100 bg-gray-50/50">
            {columns.map((col, index) => (
              <th 
                key={col.key || index} 
                className={`pb-3 pt-3 font-semibold ${index === 0 ? 'pl-4 rounded-tl-lg' : ''} ${index === columns.length - 1 ? 'pr-4 rounded-tr-lg text-right' : ''}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm">
          {data.map((rowItem, rowIndex) => (
            <tr 
              key={rowItem.id || rowIndex} 
              className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors group cursor-pointer"
            >
              {columns.map((col, colIndex) => (
                <td 
                  key={col.key || colIndex} 
                  className={`py-4 ${colIndex === 0 ? 'pl-4' : ''} ${colIndex === columns.length - 1 ? 'pr-4 text-right' : ''}`}
                >
                  {col.render ? col.render(rowItem) : rowItem[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default DataTable;