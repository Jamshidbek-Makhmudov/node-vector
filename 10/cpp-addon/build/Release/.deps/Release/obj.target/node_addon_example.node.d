cmd_Release/obj.target/node_addon_example.node := g++ -o Release/obj.target/node_addon_example.node -shared -pthread -rdynamic -m64  -Wl,-soname=node_addon_example.node -Wl,--start-group Release/obj.target/node_addon_example/src/binding.o -Wl,--end-group 