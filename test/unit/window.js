module("window");

test("Window Global Scope Equivalence", function() {
	expect(7);
	
	window.foo = "abc";
	ok( window.foo == foo, "Property created on the window is available in global scope." );
	delete window.foo;
	
	try{
        $$$$$;    
	}catch(e){
	    ok( true, "Property is not in global scope." );
    }
	ok( window.$$$$$ === undefined, "Property is not in window scope." );
	load("test/unit/fixtures/external_script.js");
	ok( $$$$$ === "12345", "Property is in global scope." );
	ok( window.$$$$$ === "12345", "Property is in window scope." );
    
    try{ ok(window.Math === Math,
        "'window' object provides common global object facilities");
    }catch(e){print(e);}
    try{ ok(Math.sqrt(4) == 2,
        "'window' provides Math.* when referenced implicitly/global");
    }catch(e){print(e);}
});
