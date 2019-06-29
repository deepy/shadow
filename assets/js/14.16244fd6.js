(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{170:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Shadow is capable of scanning a project's classes and relocating specific dependencies to a new location.\nThis is often required when one of the dependencies is susceptible to breaking changes in versions or\nto classpath pollution in a downstream project.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Shadow uses the ASM library to modify class byte code to replace the package name and any import\nstatements for a class.\nAny non-class files that are stored within a package structure are also relocated to the new location.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),a("blockquote",[a("p",[t._v("Configuring package auto relocation can add significant time to the shadow process as it will process all dependencies\nin the configurations declared to be shadowed. By default, this is the "),a("code",[t._v("runtime")]),t._v(" or "),a("code",[t._v("runtimeClasspath")]),t._v(" configurations.\nBe mindful that some Gradle plugins will automatically add dependencies to your class path. You may need to remove these\ndependencies if you do not intend to shadow them into your library.  The "),a("code",[t._v("java-gradle-plugin")]),t._v(" would normally cause such\nproblems if it were not for the special handling that Shadow provides as described in\n"),a("router-link",{attrs:{to:"/plugins/#special-handling-of-the-java-gradle-plugin-gevelopmeny-plugin"}},[t._v("Special Handling of the Java Gradle Plugin Development Plugin")]),t._v(".")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"relocating-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relocating-packages","aria-hidden":"true"}},[this._v("#")]),this._v(" Relocating Packages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Google's Guava and the ASM library are typical cases where package relocation can come in handy.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Relocating a Package")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   relocate "),a("span",{attrs:{class:"token string"}},[t._v("'junit.framework'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'shadow.junit'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The code snippet will rewrite the location for any class in the "),a("code",[t._v("junit.framework")]),t._v(" to be "),a("code",[t._v("shadow.junit")]),t._v(".\nFor example, the class "),a("code",[t._v("junit.textui.TestRunner")]),t._v(" becomes "),a("code",[t._v("shadow.junit.TestRunner")]),t._v(".\nIn the resulting JAR, the class file is relocated from "),a("code",[t._v("junit/textui/TestRunner.class")]),t._v(" to\n"),a("code",[t._v("shadow/junit/TestRunner.class")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Relocation operates at a package level.\nIt is not necessary to specify any patterns for matching, it will operate simply on the prefix\nprovided.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Relocation will be applied globally to all instance of the matched prefix.\nThat is, it does "),e("strong",[this._v("not")]),this._v(" scope to "),e("em",[this._v("only")]),this._v(" the dependencies being shadowed.\nBe specific as possible when configuring relocation as to avoid unintended relocations.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filtering-relocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtering-relocation","aria-hidden":"true"}},[this._v("#")]),this._v(" Filtering Relocation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Specific classes or files can be "),e("code",[this._v("included")]),this._v("/"),e("code",[this._v("excluded")]),this._v(" from the relocation operation if necessary.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Configuring Filtering for Relocation")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("relocate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'junit.textui'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       exclude "),a("span",{attrs:{class:"token string"}},[t._v("'junit.textui.TestRunner'")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("relocate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'junit.framework'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'b'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       include "),a("span",{attrs:{class:"token string"}},[t._v("'junit.framework.Test*'")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"automatically-relocating-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatically-relocating-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Automatically Relocating Dependencies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Shadow ships with a task that can be used to automatically configure all packages from all dependencies to be relocated.\nThis feature was formally shipped into a 2nd plugin ("),e("code",[this._v("com.github.johnrengelman.plugin-shadow")]),this._v(") but has been\nremoved for clarity reasons in version 4.0.0.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To configure automatic dependency relocation, declare a task of type "),e("code",[this._v("ConfigureShadowRelocation")]),this._v(" and configure the\n"),e("code",[this._v("target")]),this._v(" parameter to be the "),e("code",[this._v("ShadowJar")]),this._v(" task you wish to auto configure. You will also need to declared a task\ndependency so the tasks execute in the correct order.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Configure Auto Relocation")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("tasks"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("ConfigureShadowRelocation\n\ntask "),a("span",{attrs:{class:"token function"}},[t._v("relocateShadowJar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ConfigureShadowRelocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tasks"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadowJar\n    prefix "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string gstring"}},[t._v('"myapp"')]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// Default value is "shadow"')]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntasks"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadowJar"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("dependsOn tasks"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("relocateShadowJar\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);