#include <string> // c++ standard header
#include <napi.h>

Napi::String say_my_name(const Napi::CallbackInfo &info)
{
    const auto env = info.Env();
    std::string name = info[0].ToString();
    return Napi::String::New(env, "Hello " + name + " from C++");
}

Napi::Object init(Napi::Env env, Napi::Object exports)
{
    exports.Set(
      "sayMyName",
      Napi::Function::New(env, say_my_name)
    );
    return exports;
}


NODE_API_MODULE(node_addon_example, init);