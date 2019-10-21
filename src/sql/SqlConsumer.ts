import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TSqlLexer } from './grammar/TSqlLexer';
import { TSqlParser } from './grammar/TSqlParser';
import { CaseChangingStream } from './grammar/CaseChangingStream';
import { CompileTSqlParserVisitor } from './CompileTSqlParserVisitor';
export const compile = () => {
    const input = 'select table1.table1.table1.* FROM table1 where a = "a1";';
    const chars = new ANTLRInputStream(input);
    const upper = new CaseChangingStream(chars, true);
    const lexer = new TSqlLexer(upper);
    const tokens = new CommonTokenStream(lexer);
    const parser = new TSqlParser(tokens);
    const tree = parser.sql_clause();
    console.log('tree', tree);
    const compileVisitor = new CompileTSqlParserVisitor();
    const a = tree.accept(compileVisitor);
    console.log(a);
};

class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }
  
      if (ctx.children) {
        return ctx.children.map(child => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
  }