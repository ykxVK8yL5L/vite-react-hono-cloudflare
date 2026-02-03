export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center px-6">
                <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">
                    抱歉，您访问的页面不存在
                </p>

                <div className="flex justify-center gap-4">
                    {/* 返回上一页 */}
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        返回上一页
                    </button>

                    {/* 返回首页（可选） */}
                    <a
                        href="/"
                        className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
                    >
                        返回首页
                    </a>
                </div>
            </div>
        </div>
    )
}