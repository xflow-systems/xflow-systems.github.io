import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

const exampleSource = `
import "std" as std
import "./other.xfl" as other
import "./Post.xfl" as Post

PostForm(session, id, deleted, comment_page) :-
    Post.Id(@session: Session, @id: Id),
    PostDeleted(@session: Session, deleted: Bool),
    PostCommentPage(@session: Session, comment_page: Int). 

fn redSum(add: Bool, prev: Int, next: Int) Int {
    if (add) {
        return prev + next;
    } else {
        return prev - next;
    }
}

fn_test "basic" {
    var g: Int = addOne(1);
    var a: String = "asdf";
    var d: Bool = 1 >= 2;
    
    bi.intExpect(g, 2);
    // bi.stringExpect(a, "a" + "asdf");
}

query_test "query" {

    sort("id")
    page(0,10)

    inputs {
        Post.Id(100, 0),
        PostDeleted(100, false),
        PostCommentPage(100, 33),
    }

    expected_outputs {
        PostForm(100, 0, false, 0),
    }
}

\`\`\`Home()
<div>
    // <form class="p-8" .save=[PostForm{ session, other: "asdf", wrong: 1 } as PostId]>
    <div class="p-8">
        <div .for=[average in Average{}]>
            [addOne(average.avg)]
        </div>
        // <input type="hidden" .save=[PostId(session,  &post_id)] />
        <input class=[concat("p-4 border border-zinc-400 mr-2", keep(false, ""))] placeholder="Id" .save=[PostId(session, &post_id)] />
        <input class="p-4 border border-zinc-400 mr-2" placeholder="SetDeletedFalse" .save=[PostDeleted(session, false)] />
        <input class="p-4 border border-zinc-400" placeholder="Comment Page" .save=[PostCommentPage(session, save_int)] />

        <div class="text-2xl">"Post Id: " [&post_id]</div>
        <div class="text-2xl" asdf=[session]>"Session: " [session]</div>
        
        <div>
            <div class="p-4" .for=[post_form in PostForm{ session } sort("session", 1 false)]>
                <div>"Post Form Id: " [post_form.id]</div>
                <div class="p-4" .for=[comment_form in CommentForm{ deleted: false, post_id: post_form.id } page(post_form.comment_page, 1) ]>
                    <div>"Comment Form Id: " [comment_form.id]</div>
                </div>
            </div>
        </div>

        ...
</div>
\`\`\`
`;

const indentSize = 0.5;

const KEYWORDS = [ 'fn', 'import', 'as' ];

const replaceKeyWords = source => {
    for (let keyword of KEYWORDS) {
    }
};

const splitSource = exampleSource.split('\n').map(src => {
    let leadingSpaces = 0;
    let chars = src.split('');
    for (let char of chars) {
        if (char == ' ') {
            leadingSpaces++; 
        } else {
            break;
        }
    }

    return html`<div class="source-line" style="padding-left: ${indentSize * leadingSpaces + 0.4}em">${src.replace(/\ /g, ' ')}</div>`;
}); 

const App = (name) => html`<div class="main-container">
    <div style="text-align: center; margin-top: 2em; font-size: 2em">
        Project <b>XFlow</b>
    </div>
    <div class="example-source-container">
        ${splitSource}
    </div>
</div>`;

render(App("andy"), document.querySelector("#root"));

